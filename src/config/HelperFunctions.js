import gf from '@groceristar/groceristar-fetch';

export const getAllDirectionsList = () => {
    const recipe = gf.getRecipe();
    console.log(recipe);
};