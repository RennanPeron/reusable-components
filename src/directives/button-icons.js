export default {
  beforeMount(el, binding) {
    let element = el.innerHTML

    if (binding.arg == 'end') {
      el.innerHTML = `${element} <i class="material-symbols-outlined">  ${binding.value}</i>`
      return
    }

    el.innerHTML = `<i class="material-symbols-outlined"> ${binding.value} </i> ${element}`
  }
}
