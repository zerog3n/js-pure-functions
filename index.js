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
 * Find the property key in an object and compare the value:
 * ```
 * // Example usage:
 *    hasPropertyKeyValue({one:{two:{three:1}}}, 'one.two.three' 1) // true
 *    hasPropertyKeyValue({one:{two:{three:2}}}, 'one.three.two' 2) // false (path mismatch)
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

