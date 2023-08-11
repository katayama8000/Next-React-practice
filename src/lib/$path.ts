export const pagesPath = {
  $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/' as const }},
  Sample: {
    sample1: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample1' as const }},
    },
    sample10: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample10' as const }},
    },
    sample11: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample11' as const }},
    },
    sample12: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample12' as const }},
    },
    sample13: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample13' as const }},
    },
    sample14: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample14' as const }},
    },
    sample15: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample15' as const }},
    },
    sample16: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample16' as const }},
    },
    sample17: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample17' as const }},
    },
    sample18: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample18' as const }},
    },
    sample19: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample19' as const }},
    },
    sample2: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample2' as const }},
    },
    sample20: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample20' as const }},
    },
    sample21: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample21' as const }},
    },
    sample22: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample22' as const }},
    },
    sample23: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample23' as const }},
    },
    sample24: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample24' as const }},
    },
    sample25: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample25' as const }},
    },
    sample26: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample26' as const }},
    },
    sample27: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample27' as const }},
    },
    sample28: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample28' as const }},
    },
    sample3: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample3' as const }},
    },
    sample4: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample4' as const }},
    },
    sample5: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample5' as const }},
    },
    sample6: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample6' as const }},
    },
    sample7: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample7' as const }},
    },
    sample8: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample8' as const }},
    },
    sample9: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/Sample/sample9' as const }},
    },
  },
  UI: {
    index1: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/UI/index1' as const }},
    },
  },
  YouTube: {
    Hooks1: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/YouTube/Hooks1' as const }},
    },
    Hooks2: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/YouTube/Hooks2' as const }},
    },
    Hooks3: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/YouTube/Hooks3' as const }},
    },
    Hooks4: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/YouTube/Hooks4' as const }},
    },
    Hooks5: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/YouTube/Hooks5' as const }},
    },
    Hooks6: {
      $url: (url?: { hash?: string }) => {return { hash: url?.hash, pathname: '/YouTube/Hooks6' as const }},
    },
  },
};

export type PagesPath = typeof pagesPath;
