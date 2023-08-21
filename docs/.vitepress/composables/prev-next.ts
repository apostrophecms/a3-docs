import { computed } from 'vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data'
import { isActive } from 'vitepress/dist/client/shared'
import { getSidebar, getFlatSideBarLinks } from 'vitepress/dist/client/theme-default/support/sidebar'

export function usePrevNext() {
  const { page, theme, frontmatter } = useData()

  return computed(() => {
    const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath)
    const candidates = getFlatSideBarLinks(sidebar)

    const index = candidates.findIndex((link) => {
      return isActive(page.value.relativePath, link.link)
    })

    const hidePrev =
      (theme.value.docFooter?.prev === false && !frontmatter.value.prev) ||
      frontmatter.value.prev === false

    const hideNext =
      (theme.value.docFooter?.next === false && !frontmatter.value.next) ||
      frontmatter.value.next === false

      
    return {
      prev: hidePrev
        ? undefined
        : {
            text:
              (typeof frontmatter.value.prev === 'string'
                ? frontmatter.value.prev
                : typeof frontmatter.value.prev === 'object'
                ? frontmatter.value.prev.text
                : undefined) ??
              candidates[index - 1]?.docFooterText ??
              candidates[index - 1]?.text,
            link:
              (typeof frontmatter.value.prev === 'object'
                ? frontmatter.value.prev.link
                : undefined) ?? candidates[index - 1]?.link,
            icon: frontmatter.value.prev && frontmatter.value.prev.icon ? frontmatter.value.prev.icon : undefined
          },
      next: hideNext
        ? undefined
        : {
            text:
              (typeof frontmatter.value.next === 'string'
                ? frontmatter.value.next
                : typeof frontmatter.value.next === 'object'
                ? frontmatter.value.next.text
                : undefined) ??
              candidates[index + 1]?.docFooterText ??
              candidates[index + 1]?.text,
            link:
              (typeof frontmatter.value.next === 'object'
                ? frontmatter.value.next.link
                : undefined) ?? candidates[index + 1]?.link,
            icon: frontmatter.value.next && frontmatter.value.next.icon ? frontmatter.value.next.icon : undefined
          }
    } as {
      prev?: { text?: string; link?: string }
      next?: { text?: string; link?: string }
    }
  })
}