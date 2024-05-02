window.byExternal_random = ﻿class random
{
    static next()
    {
        if(arguments.length == 2)
        {
            return Math.floor(Math.random()*(arguments[1] - arguments[0] + 1) + arguments[0]);
        }
        else if(arguments.length == 1)
        {
            let min = 1;
            return Math.floor(Math.random()*(arguments[0] - min + 1) + min);
        }
        else if(arguments.length == 0)
        {
            let max = 100;
            let min = 1;
            return Math.floor(Math.random()*(max - min + 1) + min);
        }
    }
};
