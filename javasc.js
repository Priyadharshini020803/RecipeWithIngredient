function getRecipes() {
    const ingredientInput = document.getElementById('ingredients').value;
    const ingredients = ingredientInput.split(',').map(item => item.trim());

    if (ingredients.length === 0 || ingredients[0] === '') {
        alert('Please enter at least one ingredient!');
        return;
    }

    
    const sampleRecipes = [
        
        { 
            name: 'Fried Rice', 
            ingredients: ['rice', 'onion', 'egg', 'soy sauce'], 
            videoUrl: 'https://youtu.be/N-r9CRxqSRs?si=V7Jw4ZtN22e9AfcV'  // YouTube video link
        },
        
        
		{ 
            name: 'Vegetable Salad', 
            ingredients: ['tomato', 'cucumber', 'lettuce', 'onion'], 
            videoUrl: 'https://youtu.be/Xoo_I61uUpE?si=7lNegu0SC6DrVa-H'  // YouTube video link
        },
        { 
            name: 'Aloo Gobi', 
            ingredients: ['potato', 'cauliflower', 'onion', 'tomato'], 
            videoUrl: 'https://youtu.be/DHJ3BQ_Tgi0?si=MIj3PHqIr8stV7mX'  // YouTube video link for Aloo Gobi
        },
        { 
            name: 'Palak Paneer', 
            ingredients: ['spinach', 'paneer', 'onion', 'tomato'], 
            videoUrl: 'https://youtu.be/bmxjrTnxaC4?si=XCS2dYN83xdaaRe_'  // YouTube video link for Palak Paneer
        },
        { 
            name: 'Chana Masala', 
            ingredients: ['chickpeas', 'onion', 'tomato', 'garlic'], 
            videoUrl: 'https://youtu.be/3ms50piEpmE?si=XfZVHnAq0D-gD0Ek'  // YouTube video link for Chana Masala
        },
		 { 
            name: 'Aloo Paratha', 
            ingredients: ['potato', 'wheat flour', 'onion', 'coriander'], 
            videoUrl: 'https://youtu.be/25BaBBfbECc?si=pOuQDIZyeQYDEdSy'  // YouTube video link for Aloo Paratha
        },
        { 
            name: 'Paneer Butter Masala', 
            ingredients: ['paneer', 'tomato', 'cream', 'garlic'], 
            videoUrl: 'https://youtu.be/sVNQIbuv_Mc?si=xqzqPnJEmt7eTvMJ'          },
        { 
            name: 'Masala Dosa', 
            ingredients: ['rice flour', 'urad dal', 'water', 'oil'], 
            videoUrl: 'https://youtu.be/IDNtiYTd7_M?si=wfoQR9i59CDUu4HH'  
        }
    ];

    
    const matchingRecipes = sampleRecipes.filter(recipe => {
        return recipe.ingredients.some(ingredient => ingredients.includes(ingredient));
    });

    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = ''; // Clear previous results

    if (matchingRecipes.length === 0) {
        recipeList.innerHTML = '<li>No recipes found for the ingredients you entered.</li>';
    } else {
        matchingRecipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe.name;

            // Create a YouTube link for each matching recipe
            const videoLink = document.createElement('a');
            videoLink.href = recipe.videoUrl;
            videoLink.target = '_blank';  
            videoLink.textContent = '-Watch Video on YouTube';
            
        
            li.appendChild(videoLink);

            recipeList.appendChild(li);
        });
    }
}