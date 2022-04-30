$(document).ready(() => {
    const dt = $(".dt");
    const flag = $(".flags")
    const chooseLanguage = $(".choose-language")
    chooseLanguage.hide();

    $(document).mouseup(e => {
        var container = $(".choose-language");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });

    flag.on('click', e => chooseLanguage.toggle())

    dt.on('click', e => {
        let point = e.currentTarget;
        if($(point).hasClass('active-date')){
            $(point).removeClass('active-date')
        }else{
            $(point).addClass('active-date')
        }
    })
})