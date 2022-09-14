window.addEventListener('ProtocolLaunchStartSelenium', () => {
    const iframe = $('iframe#gamelaunch');
    const url = iframe.attr('src');
    iframe.remove();
    $('body').append($("<iframe id='gamelaunch' class='hidden'></iframe>").attr('src', url.replace('InApp', 'InBrowser')));
});
