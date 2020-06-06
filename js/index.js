PhotoSphereViewer.prototype.toggleGyroscopeControl = function () {
    if (this.isGyroscopeEnabled()) {
        this.stopGyroscopeControl();
    } else {
        this.startGyroscopeControl();
    }
};

var viewer = null;
var PSV = null;
var viewerItem = function (id) {
    console.log(id);
    $('#viewer')[0].innerHTML = '';
    PSV = new PhotoSphereViewer({
        container: 'viewer',
        panorama: '../images/sun' + id + '.jpg',
        // fisheye:true,
        navbar: false,
        time_anim: false,
        // max_fov: 100, // 最大缩放值
　　　　　// min_fov: 99, // 最小缩放值
        default_fov:179,
        markers: [
            {
                id: 'vp1',
                longitude: 0,
                latitude: 0,
                html: `<div class="vp1">
                <img src="../images/peo.jpg">    
            </div>`,
                style: {},
            },
        ],
    });

    // PSV.on('ready', function () {
    //     PSV.startGyroscopeControl();
    // });
};

viewerItem(1);
$('body').on('click', '.vp1', function () {
    alert(123);
});

$('#btn1').on('click', function () {
    viewerItem(1);
});
$('#btn2').on('click', function () {
    viewerItem(2);
});
$('#btn3').on('click', function(){
    PSV.toggleGyroscopeControl();
});