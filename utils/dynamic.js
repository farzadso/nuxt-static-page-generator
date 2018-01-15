// This component injects the dynamic content into the page

const Loading = {
  template: `<div>Loading..</div>`
}

export const dynamic = {
  functional: true,
  props: {
    template: String,
    data: { type: Object, default: () => ({}) }
  },
  render (h, context) {
    const template = context.props.template
    const dynComponent = {
      template,
      data () { return context.props.data }
    }
    // console.log(context.props.myVal)
    const component = template ? dynComponent : Loading
    return h(component)
  }
}
