export const Layouts : import("rebass").SxStyleProp = {
  container: {
    width: ['100%', 1000],
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 0,
    paddingRight: 0
  },
  page: {
    width: ['100%', 1000],
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 'calc(100vh - 400px)'
  },
  contentCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}