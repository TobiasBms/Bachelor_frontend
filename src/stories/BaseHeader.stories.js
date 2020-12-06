import BaseHeader from '../components/BaseHeader'

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
})

export const Header = Template.bind({})
Header.args = {
  title: 'Header',
}
