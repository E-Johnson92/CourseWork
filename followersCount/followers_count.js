let count = 0; 

function increaseCount()
{
    count++; // Increment the count by 1
    displayCount(); 
    checkContValue(); 
}

function displayCount()
{
    document.getElementById('countDisplay').innerHTML = count; 
}

function checkContValue() 
{
    if (count === 10)
    {
        alert("Your post gained 10 followers! Congratulations!");
    }
    else if (count === 20)
    {
        alert("Your post gained 20 followers! Congratulations!"); 
    }
}

function resetCount()
{
    count = 0; 
    document.getElementById('countDisplay').innerHTML = count;
    alert("Follower Count has been reset to 0.");
    return count; 
}