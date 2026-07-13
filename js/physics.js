/**
 * Physics Engine for Optics Simulator
 * Handles all optical calculations, ray tracing, and image formation
 * Based on Cartesian sign convention
 */

class OpticsPhysics {
    /**
     * Mirror/Lens equation: 1/f = 1/u + 1/v
     * Returns image distance given object distance and focal length
     */
    static mirrorLensEquation(u, f) {
        const denominator = (1 / f) - (1 / u);
        if (Math.abs(denominator) < 1e-10) {
            return Infinity;
        }
        return 1 / denominator;
    }

    /**
     * Calculate magnification
     * m = -v/u
     */
    static calculateMagnification(v, u) {
        if (Math.abs(u) < 1e-10) return 0;
        return -v / u;
    }

    /**
     * Calculate image height
     */
    static calculateImageHeight(h, magnification) {
        return Math.abs(magnification) * h;
    }

    /**
     * Determine image nature
     */
    static getImageNature(v, u, m) {
        return {
            isReal: v > 0,
            isVirtual: v < 0,
            isErect: m > 0,
            isInverted: m < 0,
            isMagnified: Math.abs(m) > 1,
            isMinified: Math.abs(m) < 1,
            isSameSize: Math.abs(Math.abs(m) - 1) < 0.01
        };
    }

    /**
     * Calculate power of lens/mirror
     */
    static calculatePower(f) {
        if (Math.abs(f) < 1e-10) return 0;
        return 1 / f;
    }
}
