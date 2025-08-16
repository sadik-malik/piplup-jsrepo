class MasonryPolyfill {
  private gridContainer: HTMLElement | null

  private cleanup: (() => void) | null = null

  constructor(gridContainer: HTMLElement | null) {
    this.gridContainer = gridContainer
    this.cleanup = MasonryPolyfill.observeMasonry(this.gridContainer)
  }

  destroy() {
    if (this.cleanup) {
      this.cleanup()
      this.cleanup = null
    }
  }

  private static observeMasonry(gridContainer: HTMLElement | null) {
    if (!gridContainer) {
      return MasonryPolyfill.noop;
    }

    const style = getComputedStyle(gridContainer);

    if (style.gridTemplateRows === 'masonry' || style.gridTemplateColumns === 'masonry') {
      // Masonry is supported natively
      return MasonryPolyfill.noop;
    }

    // Layout function to be called on resize or mutation
    const layout = () => requestAnimationFrame(() => MasonryPolyfill.layoutMasonryItems(gridContainer));

    // Observe size changes
    const resizeObserver = new ResizeObserver(layout);
    resizeObserver.observe(gridContainer);

    // Observe child list changes
    const mutationObserver = new MutationObserver(layout);
    mutationObserver.observe(gridContainer, { childList: true, subtree: false });

    // Cleanup both observers
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }

  private static layoutMasonryItems(grid: HTMLElement) {
    const items = Array.from(grid.childNodes).filter(MasonryPolyfill.isHTMLElement)

    items.forEach(({ style }) => {
      style.removeProperty('margin-top')
      style.removeProperty('margin-left')
    })

    const style = getComputedStyle(grid)
    const columnsRule = MasonryPolyfill.getStyleInfo(
      grid,
      'grid-template-columns',
      'gridTemplateColumns',
    )
    const columns = columnsRule.split(' ').length

    const rowsRule = MasonryPolyfill.getStyleInfo(grid, 'grid-template-rows', 'gridTemplateRows')
    const rows = rowsRule.split(' ').length

    if (rowsRule !== 'masonry' && columnsRule !== 'masonry') {
      return
    }

    if (rowsRule === 'masonry') {
      if (columns <= 1) {
        return
      }
      if (items.length <= columns) {
        return
      }

      const gap = parseFloat(style.rowGap)

      items.slice(columns).forEach((item, index) => {
        const { bottom: prevBottom } = items[index]!.getBoundingClientRect()
        const { top } = item.getBoundingClientRect()

        item.style.setProperty('margin-top', `${prevBottom + gap - top}px`)
      })
    } else {
      if (rows <= 1) {
        return
      }
      if (items.length <= rows) {
        return
      }

      const gap = parseFloat(style.columnGap)

      items.slice(rows).forEach((item, index) => {
        const { right: prevRight } = items[index]!.getBoundingClientRect()
        const { left } = item.getBoundingClientRect()

        item.style.setProperty('margin-left', `${prevRight + gap - left}px`)
      })
    }
  }

  private static noop() {}

  private static isHTMLElement(element: ChildNode): element is HTMLElement {
    return element.nodeType === 1
  }

  private static getStyleInfo(
    el: HTMLElement,
    property: 'grid-template-columns' | 'grid-template-rows',
    attribute: 'gridTemplateColumns' | 'gridTemplateRows',
  ) {
    const inline = el.style[attribute]
    const computedValue = getComputedStyle(el)[attribute]

    if (inline) {
      return computedValue
    }

    const isExplicit = (() => {
      for (const sheet of document.styleSheets) {
        let rules
        try {
          rules = sheet.cssRules
        } catch (_e) {
          // CORS-restricted stylesheet
          continue
        }
        if (!rules) {
          continue
        }

        for (const rule of rules) {
          if (!(rule instanceof CSSStyleRule)) {
            continue
          }
          if (!el.matches(rule.selectorText)) {
            continue
          }

          const val = rule.style.getPropertyValue(property)
          if (val) {
            return true
          }
        }
      }
      return false
    })()

    if (isExplicit) {
      return computedValue
    }
    return 'masonry'
  }
}

export default MasonryPolyfill
