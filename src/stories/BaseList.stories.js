import BaseList from '../components/BaseList'
export default {
  title: 'Ui/List',
  component: BaseList,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  onClick: () => console.log('test'),
  components: { BaseList },
  template:
    '<BaseList v-bind="$props"><template v-slot:list></template></BaseList>',
})

export const List = Template.bind({})
List.args = {}
