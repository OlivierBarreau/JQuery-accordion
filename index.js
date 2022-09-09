$(document).ready(function($) {
    // Les titres des champs
    var champs_titre = $('.accordion > div.block > div.title');

    // Les descriptions des champs
    var champs_description = $('.accordion > div.block > div.grid');

    // Cacher toutes les descriptions
    champs_description.hide();

    // Montrer la premier
    champs_description.first().show();

    // Mettre en forme le champ activé (fond bleu, flèche et caractères en blancs)
    champs_titre.first()[0].style.backgroundColor = "#007fff";
    champs_titre.first()[0].style.color = "white";
    champs_titre.first().toggleClass('title-active', true);

    // Sauvegarde du dernier champ sélectionné
    var dernier_champ = champs_titre.first();

    //Actions à effectuer lorsque le champ est sélectionné
    $('.accordion > div.block > div.title').click(function() {
        var $this = $(this);

        champs_description.slideUp();

        // Flèche en position initiale (champ non visible)
        $(this).toggleClass('title-active', false);

        for (let i = 0; i < champs_titre.length; i++) {
            var element = champs_titre[i];
            element.style.backgroundColor = "#f6f6f6";
            element.style.color = "black";
        }

        // Action à effectuer si le champ selectionné est différent du précédent champ sélectionné
        if ($this.text() != dernier_champ.text()) {
            $this.next().slideDown();

            // Flèche pointant vers le bas(champ deployé)
            dernier_champ.toggleClass('title-active', false);
            $(this).toggleClass('title-active', true);

            // Changer la couleur de l'entête active
            $this[0].style.backgroundColor = "#007fff";
            $this[0].style.color = "white";
            dernier_champ = $this;
        } else { // Action à effectuer si le champ selectionné est identique au précédent champ sélectionné
            if ($this.next()[0].style.display == "none") {
                $this.next().slideDown();

                // Flèche pointant vers le bas(champ deployé)
                $(this).toggleClass('title-active', true);

                // Changer la couleur de l'entête active
                $this[0].style.backgroundColor = "#007fff";
                $this[0].style.color = "white";
            }
        }
        return false;
    });
})