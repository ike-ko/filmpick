export const MOBILE_BREAKPOINT = 576;

export const TMDB_SM_IMG_WIDTH = 92;
export const TMDB_SM_IMG_HEIGHT = 138;

export const TMDB_LG_IMG_WIDTH = 154;
export const TMDB_LG_IMG_HEIGHT = 231;

// Animation variants for framer-motion
export const CARD_VARIANTS = {
    visible: animationDelay => ({ 
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: animationDelay * 0.075
        }
    }),
    hidden: { 
        opacity: 0,
        y: '1rem'
    }
}

export const HOME_TEXT_VARIANTS = {
    visible: animationDelay => ({ 
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: animationDelay
        }
    }),
    hidden: { 
        opacity: 0,
        y: '1rem'
    }
}

export const HOME_SPACER_VARIANTS = {
    visible: animationDelay => ({ 
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: animationDelay
        }
    }),
    hidden: { 
        opacity: 0,
        x: '1rem'
    }
}

export const HOME_NAVBAR_VARIANTS = {
    visible: animationDelay => ({ 
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: animationDelay
        }
    }),
    hidden: { 
        opacity: 0,
        y: '-1rem'
    }
}

export const ABOUT_SPACER_VARIANTS = {
    visible: animationDelay => ({ 
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            delay: animationDelay
        }
    }),
    hidden: { 
        opacity: 0,
        x: '-1rem'
    }
}