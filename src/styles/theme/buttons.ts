export const Buttons: import("rebass").SxStyleProp = {
  primary: {
    fontSize: 2,
    fontWeight: 'bold',
    color: 'background',
    bg: 'primary',
    borderRadius: 'default',
    cursor: 'pointer',
    outline: 'none',
    padding: '13px 10px',
    // textTransform: 'uppercase',
    letterSpacing: '0.05em',
    '&:disabled': {
      bg: 'gray'
    }
  },
  outline: {
    variant: 'buttons.primary',
    color: 'primary',
    bg: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    padding: '13px 10px',
    // textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary'
  },
  secondary: {
    variant: 'buttons.primary',
    color: 'background',
    bg: 'gray',
    // textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  normal: {
    variant: 'buttons.primary',
    color: 'text',
    bg: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    padding: '13px 10px',
    // textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  rounded: {
    primary: {
      variant: 'buttons.primary',
      borderRadius: 9999,
    },
    secondary: {
      variant: 'buttons.secondary',
      borderRadius: 9999,
    }
  },
  medium: {
    primary: {
      variant: 'buttons.primary',
      fontSize: 1,
      fontWeight: '500',
      padding: '9px 10px'
    },
    secondary: {
      variant: 'buttons.secondary',
      fontSize: 1,
      fontWeight: '500',
      padding: '9px 10px'
    },
    normal: {
      variant: 'buttons.normal',
      fontSize: 1,
      fontWeight: '500',
      padding: '9px 10px'
    },
    outline: {
      variant: 'buttons.outline',
      fontSize: 1,
      fontWeight: '500',
      padding: '9px 10px'
    },

    buy: {
      variant: 'buttons.normal',
      bg: 'buy',
      color: 'white'
    },
    sell: {
      variant: 'buttons.normal',
      bg: 'sell',
      color: 'white'
    }
  },
  small: {
    primary: {
      variant: 'buttons.primary',
      fontSize: 0,
      fontWeight: '500',
      padding: '7px 8px'
    },
    secondary: {
      variant: 'buttons.secondary',
      fontSize: 0,
      fontWeight: '500',
      padding: '7px 8px'
    },
    normal: {
      variant: 'buttons.normal',
      fontSize: 0,
      fontWeight: '500',
      padding: '7px 8px'
    },
    outline: {
      variant: 'buttons.outline',
      fontSize: 0,
      fontWeight: '500',
      padding: '7px 8px'
    },
    outlineNoBorder: {
      variant: 'buttons.outline',
      fontSize: 0,
      fontWeight: '500',
      padding: '7px 8px',
      borderWidth: 0
    }
  },
  tab: {
    root: {
      fontSize: 2,
      fontWeight: '500',
      cursor: 'pointer',
      outline: 'none',
      padding: '10px',
      // textTransform: 'uppercase',
      letterSpacing: '0.05em',
      borderRadius: 0,
      borderRight: '1px solid #e4e4e4',
      '&:first-of-type': {
        borderTopLeftRadius: 'default',
        borderBottomLeftRadius: 'default'
      },
      '&:last-of-type': {
        borderTopRightRadius: 'default',
        borderBottomRightRadius: 'default',
        borderRight: 'none'
      }
    },
    active: {
      variant: 'buttons.tab.root',
      color: 'background',
      bg: 'primary'
    },
    inactive: {
      variant: 'buttons.tab.root',
      color: 'text',
      bg: 'muted'
    }
  }
}