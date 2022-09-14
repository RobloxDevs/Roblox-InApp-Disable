window.navigator.msLaunchUri = (url) => {
    const iframe = document.createElement('iframe');
    iframe.id = 'gamelaunch';
    iframe.className = 'hidden';
    iframe.src = url.replace('InApp', 'InBrowser');
    document.getElementsByTagName('body')[0].append(iframe);
}; // Hack IE method
