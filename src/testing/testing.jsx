
// in singleProduct.jsx replace useEffect with this one to 
// test whether singleProduct.stock conditional works or not.
// test by changing the {number} in res.data.stock = {number}

useEffect(() => {
    ProductService.getSingleProduct(id)
        .then((res) => {
            const firstImage = res.data.images[0];
            setMainImage(firstImage);
            res.data.stock = 0;
            setSingleProduct(res.data);
        })
        .catch((err) => console.log(err))
}, [])