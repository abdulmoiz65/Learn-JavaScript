
    document.getElementById("start").onclick = async()=>{
        const share = await navigator.mediaDevices.getDisplayMedia({screen:true});
        document.getElementById("screen").srcObject = share;
    }

