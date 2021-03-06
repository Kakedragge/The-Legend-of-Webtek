/**
 * FILE NAME: navbar.js
 * WRITTEN BY: Simon Hagen Strand
 * WHEN: November 2016
 * PURPOSE: Loads the navbar into all the different html files
 */


document.write('<nav>' +
        '<ul id="navbar">' +
            '<li>' +
                '<a href="biography.html">Biography</a>' +
            '</li>' +
            '<li>' +
                '<a href="references.html">References</a>' +
            '</li>' +
            '<li class="dropdown" onMouseEnter="show()" onMouseLeave="show()">' +
            '<a href="gallery.html" class="dropbtn">Gallery</a>' +
                '<div class="dropdown-content" id="myDropdown">' +
                    '<a href="galleryn.html">Nature</a>' +
                    '<a href="galleryp.html">Photography</a>' +
                    '<a href="gallerypo.html">Portraits</a>' +
                    '<a href="galleryc.html">Contemporary</a>' +
                '</div>' +
            '</li>' +
            '<li>' +
                '<a href="events.html">Events</a>' +
            '</li>' +
            '<li>' +
                '<a href="contact.html">Contact</a>' +
            '</li>' +
        '</ul>' +
        '</nav>');
