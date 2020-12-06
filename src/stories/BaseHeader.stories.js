import BaseHeader from '../components/BaseHeader'
import store from '../store'
export default {
  title: 'Ui/Header',
  component: BaseHeader,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  onClick: () => console.log('test'),
  components: { BaseHeader },
  template: '<BaseHeader v-bind="$props"></BaseHeader>',
  store: store,
})

export const Header = Template.bind({})
Header.args = {
  title: 'Header',
}
