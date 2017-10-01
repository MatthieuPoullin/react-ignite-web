export function getData (data = {}) {
  return (data['hydra:member']) ? data['hydra:member'] : []
}

export function getTotalItems (data = {}) {
  return (data['hydra:totalItems']) ? data['hydra:totalItems'] : 0
}

export function getNextPage (data = {}) {
  return (data['hydra:view'] && data['hydra:view']['hydra:next']) ? data['hydra:view']['hydra:next'] : ''
}

export function getNextPageNumber (data = {}) {
  return findGetParameter('page', getNextPage(data))
}

export function getLastPageNumber (data = {}) {
  return findGetParameter('page', getLastPage(data))
}

export function getLastPage (data = {}) {
  return (data['hydra:view'] && data['hydra:view']['hydra:last']) ? data['hydra:view']['hydra:last'] : ''
}

function findGetParameter (parameterName, url) {
  var result = null
  var tmp = []
  url
        .split('?')
        .forEach(function (item) {
          item
            .split('&')
            .forEach(function (item) {
              tmp = item.split('=')
              if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1])
            })
        })
  return result
}
