window.app = window.app || {};

(function(ns){
    
    ns.model = {
        
        companies : [
        
            {
                id : 1,
                type : 1,
                outsources : [{id : 2, weight : 1}, {id : 5, weight : 1}]
            },
            
            {
                id : 2,
                type : 1
            },

            {
                id : 3,
                type : 1,
                outsources : [{id : 4, weight : 1}, {id : 1, weight : 1}]
            },

            {
                id : 4,
                type : 2
            },

            {
                id : 5,
                type : 2
            },

            {
                id : 6,
                type : 1
            },
            
            {
                id : 7,
                type : 2
            },

            {
                id : 8,
                type : 2
            },

            {
                id : 9,
                type : 1,
                outsources : [{id : 8, weight : 1.2}, {id : 3, weight : 1.8}]
            },
            
            {
                id : 10,
                type : 1
            },
            
            {
                id : 11,
                type : 1
            },
            
            {
                id : 12,
                type : 1,
                outsources : [{id : 10, weight : 1}, {id : 11, weight : 1.8}, {id : 13, weight : 1.8}, {id : 14, weight : 1.8}, {id : 15, weight : 2.0}, {id : 16, weight : 1.5}]
            },
            
            {
                id : 13,
                type : 1
            },
            
            {
                id : 14,
                type : 1
            },
            
            {
                id : 15,
                type : 1
            },
            
            {
                id : 16,
                type : 1
            }
        
        ]
        
    };
    
})(window.app);