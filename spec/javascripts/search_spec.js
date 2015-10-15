describe('search box', function () {
    describe('when a keyup event occurs', function () {
        it('shows ideas that match on title', function () {
            // fill in the search box with some text
            // fire the keyup event on the search box
            // assert that ideas matching the search text are shown and other ideas are hidden
            var searchBox = $("<input type='text'>");
            searchBox[0].value = "hello";
            var ideasContainer = $(
                "<ul>" + "<div data-title='hello' data-body='there'></div>" +
                "<div data-title='wonderful' data-body='day'></div>" + "</ul>"
            );

            listenForSearch(searchBox, ideasContainer);

            searchBox.triggerHandler("keyup");

            var firstElement = ideasContainer.children('div').eq(0);
            var firstShown = firstElement.css('display') === 'block';
            var secondElement = ideasContainer.children('div').eq(1);
            var secondShown = secondElement.css('display') === 'none';

            expect(firstShown).to.equal(true);
            expect(secondShown).to.equal(true);
        });
    });
});
