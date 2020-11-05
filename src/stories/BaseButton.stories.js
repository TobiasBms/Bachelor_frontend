import BaseButton from '../components/BaseButton'
import '../assets/styles/index.css'

export default {
  title: 'UI/Button',
  component: BaseButton,
  argTypes: {
    type: {
      control: { type: 'select', options: ['button', 'submit', 'reset'] },
    },
    size: {
      control: { type: 'select', options: ['small', 'normal', 'large'] },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  onClick: () => console.log('test'),
  components: { BaseButton },
  template: '<BaseButton v-bind="$props" />',
})

export const Positive = Template.bind({})
Positive.args = {
  label: 'Button',
}

export const Negative = Template.bind({})
Negative.args = {
  negative: true,
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
  label: 'Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Button',
}
