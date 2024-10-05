function get_cartesian_angle_from_rotation(rotation) {
    // need to handle different cases of the euler rotational values
    if (rotation.x === 0) {
        if (rotation.y >= 0) {
            return rotation.y;
        } else {
            return rotation.y + 2*Math.PI;
        }
    } else {
        if (rotation.y >= 0) {
            return Math.PI - rotation.y;
        } else {
            return -1*rotation.y + Math.PI;
        }
    }
}

export { get_cartesian_angle_from_rotation }