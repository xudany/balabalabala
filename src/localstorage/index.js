'use strict'

const localStorage = {
  commit: function (state, payload) {
    switch (state) {
      case 'managerBase':
        set('managerBase', payload)
        break
      case 'permissionTree':
        set('permissionTree', payload)
        break
      case 'region':
        set('region', payload)
        break
      default:
        // nothing for default.
    }
  },

  get: (state, defaultValue = 'undefined') => get(state, defaultValue)
}

function set (itemName, itemValue) {
  return window.localStorage.setItem(itemName, JSON.stringify(itemValue))
}

function get (itemName, defaultValue) {
  const origin = window.localStorage.getItem(itemName)
  let result = {}
  try {
    result = JSON.parse(origin)
  } catch (e) {
    result = defaultValue
  }
  return result
}

export default localStorage
