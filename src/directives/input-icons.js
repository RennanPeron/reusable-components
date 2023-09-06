export default {
  beforeMount(el, binding) {
    // Position Relative to the label
    el.querySelector('label').classList.add('relative')

    let padding = 'pl-8'
    let position = 'top-1/2 left-1.5'

    if (binding.arg == 'end') {
      padding = 'pr-8'
      position = 'top-1/2 right-1.5'
    }
    // Add some padding to the input
    el.querySelector('input').classList.add(padding)

    // Add the icon
    el.querySelector('input').insertAdjacentHTML(
      'beforebegin',
      `<i class="material-symbols-outlined absolute ${position}"> ${binding.value} </i>`
    )
  }
}
