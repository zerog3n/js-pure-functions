/**
 * Purrfunc: Pure JavaScript Function Library
 * 
 * - Author:   James Haworth (zerog3n)
 * - Created:  2023-05-12
 * - Licence:  MIT
 * 
 * Random functions which might be useful for things.
 */

/**
 * Find the property key in an object:
 * ```
 * // Example usage:
 *    hasPropertyKey({one:{two:{three:1}}}, 'one.two.three') // true
 *    hasPropertyKey({one:{two:{three:2}}}, 'one.three.two') // false (key mismatch)
 * ```
 * Returns `true` if the property key is found
 * or `false` otherwise.
 */
function hasPropertyKey(object = {}, key = '') {
    // find the property key in an object
    let o = object
    let k = key
    
    // prevent bad input params
    if (typeof o !== 'object') return false
    if (typeof k !== 'string') return false

    const kc = k.split('.') // key components
    let prop = o // start at the object root

    // find the property key
    for (const c of kc) {
        // traverse until the key/value is found
        if (prop && prop.hasOwnProperty(c)) prop = prop[c]
        else return false
    }

    // check that a value is defined
    if (typeof prop != undefined) return true
    return false // no property key found
}



/**
 * Find the property key in an object and compare the value:
 * ```
 * // Example usage:
 *    hasPropertyKeyValue({one:{two:{three:1}}}, 'one.two.three' 1) // true
 *    hasPropertyKeyValue({one:{two:{three:2}}}, 'one.three.two' 2) // false (key mismatch)
 *    hasPropertyKeyValue({one:{two:{three:0}}}, 'one.two.three' 3) // false (value mismatch)
 * ```
 * Returns `true` if both property key and the value match
 * or `false` otherwise.
 */
function hasPropertyKeyValue(object = {}, key = '', value = undefined) {
    // find the property key in an object and compare the value
    let o = object
    let k = key
    let v = value
    
    // prevent bad input params
    if (typeof o !== 'object') return false
    if (typeof k !== 'string') return false

    const kc = k.split('.') // key components
    let prop = o // start at the object root

    // find the property key
    for (const c of kc) {
        // traverse until the key/value is found
        if (prop && prop.hasOwnProperty(c)) prop = prop[c]
        else return false
    }

    // compare the value
    if (prop === v) return true
    return false // no match found
}



/**
 * Find the property key in an object and return the value:
 * ```
 * // Example usage:
 *    getPropertyKeyValue({one:{two:{three:1}}},       'one.two.three') // 1
 *    getPropertyKeyValue({one:{two:{three:2}}},       'one.three.two') // undefined (key mismatch)
 *    getPropertyKeyValue({one:{two:{three:"three"}}}, 'one.two.three') // "three"
 * ```
 * Returns the object property if found
 * or `undefined` otherwise.
 */
function getPropertyKeyValue(object = {}, key = '') {
    // find the property key in an object and return the value
    let o = object
    let k = key

    // if key is a number convert to string
    if (typeof k === 'number') k = `${k}`
    
    // prevent bad input params
    if (typeof o !== 'object') return undefined
    if (typeof k !== 'string' && !Array.isArray(object)) return undefined

    let fc = 0 // found component count
    let kc = k.split('.') // get key components
    let prop = o // start at the object root

    // find the property key
    for (const c of kc) {
        // traverse until the key/value is found
        if (prop && prop.hasOwnProperty(c)) {
            prop = prop[c]
            fc++
        }
    }

    // if the length of key components matches the number found
    if (kc.length == fc) return prop // return the property value
    return undefined // no match found
}



