import { defineModel } from '@vurb/core';

export const FakerListModel = defineModel('FakerList', m => { 
    m.casts({ 
        type: m.string('Resource type'), 
        items: m.text('JSON array') 
    }); 
});
