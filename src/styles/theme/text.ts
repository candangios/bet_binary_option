export const Texts: import("rebass").SxStyleProp = {
  heading: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading'
  },
  display: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    fontSize: [5, 6, 7],
  },
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  badge: {
    display: 'inline-block',
    padding: '2px 10px',
    background: 'gray',
    color: '#ffffff !important',
    borderRadius: 9999,
    fontWeight: '400 !important'
  },
  formLabel: {
    color: 'grey',
    marginBottom: 2,
    marginTop: 1,
    fontWeight: 'bold'
  },
  link: {
    default: {
      color: 'primary',
      fontWeight: 'bold',
      display: 'inline'
    },
    black: {
      fontWeight: 'bold',
      display: 'inline',
      color: 'text',
      cursor: 'pointer'
    }
  },
  section: {
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    paddingBottom: '12px',
    fontSize: 0,
    color: 'gray'
  },
  pointer: {
    cursor: 'pointer'
  },
  highlight: {
    root: {
      borderLeftWidth: '4px',
      borderLeftStyle: 'solid',
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: '5px',
      paddingBottom: '5px',
      lineHeight: 1.5
    },
    primary: {
      variant: 'text.highlight.root',
      borderLeftColor: 'primary',
      background: 'rgba(51, 1, 204, 0.15)'
    },
    success: {
      variant: 'text.highlight.root',
      borderLeftColor: 'success',
      background: 'rgba(0, 204, 2, 0.15)'

    },
    warning: {
      variant: 'text.highlight.root',
      borderLeftColor: 'warning',
      background: 'rgba(255, 136, 0, 0.2)'
    },
    info: {
      variant: 'text.highlight.root',
      borderLeftColor: '#607D8B',
      background: 'rgba(165, 165, 165, 0.2)'
    },
    error: {
      variant: 'text.highlight.root',
      borderLeftColor: 'textError',
      background: 'rgba(249, 45, 45, 0.2)'
    },
  }
}