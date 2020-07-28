export const Forms: import("rebass").SxStyleProp = {
  label: {
    fontSize: 2,
    color: 'gray',
    marginTop: 3,
    marginBottom: 1,
  },
  field: {
    borderColor: "lightgray",
    borderRadius: 'default',
    p: '9px 10px 10px',
    fontSize: 2,
    borderWidth: '1px',
    "&:focus": {
      borderColor: "primary",
      outline: "none"
    }
  },
  input: {
    variant: "forms.field",
    borderRadius: 5,
  },
  select: {
    variant: "forms.field",
    borderRadius: 5,
  },
  textarea: {
    variant: "forms.field",
    fontFamily: "body"
  },
  radio: {},
  slider: {
    bg: "lightgray"
  },
  switch: {}
}