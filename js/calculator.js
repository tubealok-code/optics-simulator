/**
 * Calculator Engine
 */

class OpticalCalculator {
    static solveMirrorLensEquation(known) {
        const { u, v, f } = known;
        const result = {};

        if (u !== undefined && v !== undefined) {
            const denominator = (1 / u) + (1 / v);
            result.f = denominator !== 0 ? 1 / denominator : Infinity;
        } else if (u !== undefined && f !== undefined) {
            const denominator = (1 / f) - (1 / u);
            result.v = denominator !== 0 ? 1 / denominator : Infinity;
        }

        return result;
    }

    static calculateMagnification(v, u) {
        if (Math.abs(u) < 1e-10) return undefined;
        return -v / u;
    }
}
