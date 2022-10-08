export const pagesPath = {
  "sample1": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample1' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
