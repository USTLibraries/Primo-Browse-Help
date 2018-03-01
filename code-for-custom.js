angular
  .module('browsePageBottom', [])
  .component('prmBrowseSearchAfter', {
    template: '\
    <div class="bar filter-bar layout-align-center-center layout-row margin-top-medium" layout="row" layout-align="center center" id="cust-browse-page-help">\
    <span class="margin-right-small"  ng-bind-html="message" ></span>\
    </div>\
    ',
    controller: ['$scope', '$location', '$sce', 'browsePageBottomOptions',
      function ($scope, $location, $sce, browsePageBottomOptions) {
	$scope.message = $sce.trustAsHtml(browsePageBottomOptions.message);
      }]
});

var app = angular.module('viewCustom', ['browsePageBottom']);

// Bottom of Browse Page
app.constant('browsePageBottomOptions', {
	message: "<h2>Things to know when browsing</h2><ol><li>You are only able to browse St. Thomas-owned items. Items held by other CLIC libraries will not be included while browsing.</li><li>When browsing by title for items by an author or about an author, use the "Last Name, First Name" format<br><strong>EXAMPLE:</strong><ul><li>Shakespeare, William</li></ul></li><li>When browsing by subject for items about a person, use the "Last Name, First Name" format<br><strong>EXAMPLES:</strong><ul><li>Lincoln, Abraham</li><li>Mao, Zedong</li></ul></li><li>When browsing for a title, refrain from including stop words at the beginning of the title, such as a, the, is, at, which, and on.<br><strong>EXAMPLES:</strong><ul><li>Giver (instead of The Giver)</li><li>Tale of Two Cities (instead of A Tale of Two Cities)</li><li>Tree Grows in Brooklyn (instead of A Tree Grows in Brooklyn)</li><li>Kleine Nachtmusik (instead of Eine kleine Nachtmusik)</li></ul></li><li>When browsing for corporate bodies, companies, musical groups, etc., the names should be entered in natural word order.</li></ol>"
});
