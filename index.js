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
    
    // prevent bad params
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
    
    // prevent bad params
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

