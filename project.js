function addwishlist(heartId, imageUrl, itemName, itemPrice) {
    var heartIcon = document.getElementById(heartId);
    if (heartIcon.classList.contains('far')) {
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas'); 
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td style="display: flex; align-items: center;">
                <img src="${imageUrl}" alt="${itemName}" style="max-width: 50px;">
                <p>${itemName}</p>
            </td>
            <td>${itemPrice}</td>`;
        newRow.setAttribute('data-heart-id', heartId);
        document.getElementById('wishlistItems').appendChild(newRow);
        document.getElementById('wishlistTable').style.display = 'table';
    } else {
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far'); 
        var rows = document.querySelectorAll('#wishlistItems tr[data-heart-id="' + heartId + '"]');
        rows.forEach(function(row) {
            row.remove();
        });
        if (document.getElementById('wishlistItems').childElementCount === 0) {
            document.getElementById('wishlistTable').style.display = 'none';
        }
    }
}
