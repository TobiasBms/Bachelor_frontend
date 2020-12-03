import BaseProduct from '../components/BaseProduct'
import BaseButton from '../components/BaseButton'

export default {
  title: 'UI/Product',
  component: BaseProduct,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  onClick: () => console.log('test'),
  components: { BaseProduct },
  template: '<BaseProduct v-bind="$props"></BaseProduct>',
})


export const Product = Template.bind({
})

Product.args = {
  label: 'Product',
  type: "alm",
  price: 200
}



