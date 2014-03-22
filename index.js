var is_obj_false = function (obj, opts) {
    opts = typeof opts !== 'undefined' ? opts : {};

    if ( !obj ) return true;
    
    if ( typeof obj != 'object') {
        return is_non_object_false(obj);
    }
    
    for (p in obj) {
        if (obj.hasOwnProperty(p) && ! ignore_prop(p, opts)) {
            if (! is_false(obj, p) ) {
                return false;
            }
        }
    }

    return true;
}

function ignore_prop(p, opts) {
    var regex = opts.ignore_props ? new RegExp(opts.ignore_props) : undefined;
    if ( regex ) {
        return regex.test(p);
    }
    else {
        return false;
    }
}

function is_non_object_false(thing) {
    if ( !thing ) return true;
    if ( typeof thing == 'string') {
        return thing.replace(/^\s+/, '').replace(/\s+$/, '') == '';
    }
    return false;
}

function is_false (obj, p) {
    var v = obj[p];
    if ( typeof v == 'object') {
        return is_obj_false(v);
    }
    else {
        return is_non_object_false(v);
    }
}

if (typeof module !== 'undefined') {
  module.exports = is_obj_false;
}
