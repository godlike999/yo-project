;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-cry" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 512C1024 229.230208 794.769792 0 512 0 229.230208 0 0 229.230208 0 512 0 794.769792 229.230208 1024 512 1024 629.410831 1024 740.826187 984.331046 830.768465 912.686662 841.557579 904.092491 843.33693 888.379234 834.742758 877.590121 826.148587 866.801009 810.43533 865.021658 799.646219 873.615827 718.470035 938.277495 618.001779 974.048781 512 974.048781 256.817504 974.048781 49.951219 767.182496 49.951219 512 49.951219 256.817504 256.817504 49.951219 512 49.951219 767.182496 49.951219 974.048781 256.817504 974.048781 512 974.048781 599.492834 949.714859 683.336764 904.470807 755.960693 897.177109 767.668243 900.755245 783.071797 912.462793 790.365493 924.170342 797.659191 939.573897 794.081058 946.867595 782.373508 997.013826 701.880796 1024 608.898379 1024 512Z"  ></path>' +
    '' +
    '<path d="M337.170731 499.512194C371.654852 499.512194 399.609756 471.557291 399.609756 437.073171 399.609756 402.58905 371.654852 374.634146 337.170731 374.634146 302.686611 374.634146 274.731708 402.58905 274.731708 437.073171 274.731708 471.557291 302.686611 499.512194 337.170731 499.512194ZM711.804879 499.512194C746.288998 499.512194 774.243902 471.557291 774.243902 437.073171 774.243902 402.58905 746.288998 374.634146 711.804879 374.634146 677.320757 374.634146 649.365854 402.58905 649.365854 437.073171 649.365854 471.557291 677.320757 499.512194 711.804879 499.512194Z"  ></path>' +
    '' +
    '<path d="M352.788105 704.784525C396.165222 670.082831 453.151987 649.360371 524.487806 649.360371 595.823622 649.360371 652.810387 670.082831 696.187505 704.784525 722.700531 725.994946 738.882517 747.570927 746.631548 763.068988 752.800254 775.406402 747.799529 790.408576 735.462114 796.577284 723.124702 802.74599 708.122526 797.745265 701.953818 785.407851 701.03616 783.572535 698.492224 779.382524 694.165854 773.614029 686.602473 763.529523 676.927317 753.345148 664.983226 743.789875 630.311565 716.052544 584.273939 699.31159 524.487806 699.31159 464.70167 699.31159 418.664045 716.052544 383.992384 743.789875 372.048292 753.345148 362.373137 763.529523 354.809756 773.614029 350.483386 779.382524 347.93945 783.572535 347.021792 785.407851 340.853084 797.745265 325.850908 802.74599 313.513495 796.577284 301.176081 790.408576 296.175356 775.406402 302.344062 763.068988 310.093092 747.570927 326.275078 725.994946 352.788105 704.784525Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-folder" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1023.776727 346.26886C1023.776727 277.032444 967.894929 221.029378 898.770263 221.029378L524.389269 221.029378 541.827964 228.160369 415.475552 104.318316 408.200011 97.187324 398.036858 97.187324 49.727948 97.187324 24.752338 97.187324 24.752338 122.285363 24.752338 799.805071C24.752338 869.148378 80.62984 925.422618 149.496902 925.422618L887.174801 925.422618C900.96845 925.422618 912.150411 914.185843 912.150411 900.324578 912.150411 886.463315 900.96845 875.226539 887.174801 875.226539L149.496902 875.226539C108.2416 875.226539 74.703558 841.450372 74.703558 799.805071L74.703558 122.285363 49.727948 147.383402 398.036858 147.383402 380.598165 140.25241 506.950577 264.094464 514.226118 271.225456 524.389269 271.225456 898.770263 271.225456C940.338027 271.225456 973.825508 304.785609 973.825508 346.26886L973.825508 788.661907C973.825508 802.523172 985.007471 813.759947 998.801118 813.759947 1012.594767 813.759947 1023.776727 802.523172 1023.776727 788.661907L1023.776727 346.26886Z"  ></path>' +
    '' +
    '<path d="M1016.007812 486.2577 1016.007812 436.061621 27.784179 436.061621 27.784179 486.2577 1016.007812 486.2577Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-account" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M793.6 316.991454C793.6 153.703982 661.792629 21.333333 499.2 21.333333 336.607371 21.333333 204.8 153.703982 204.8 316.991454 204.8 480.278923 336.607371 612.649572 499.2 612.649572 661.792629 612.649572 793.6 480.278923 793.6 316.991454ZM256 316.991454C256 182.101803 364.88435 72.752137 499.2 72.752137 633.51565 72.752137 742.4 182.101803 742.4 316.991454 742.4 451.881103 633.51565 561.230769 499.2 561.230769 364.88435 561.230769 256 451.881103 256 316.991454Z"  ></path>' +
    '' +
    '<path d="M0 998.290598 0 1024 25.6 1024 486.4 1024 998.4 1024 1024 1024 1024 998.290598C1024 767.462671 787.090923 561.230769 512 561.230769 495.448045 561.230769 478.989086 561.900892 462.660538 563.232578 448.568439 564.381869 485.255599 576.786276 486.4 590.938596 501.350035 589.719337 496.831226 612.649572 512 612.649572 760.310844 612.649572 972.8 797.623669 972.8 998.290598L998.4 972.581197 486.4 972.581197 25.6 972.581197 51.2 998.290598C51.2 861.757427 137.013906 736.945338 275.263548 667.439085 287.906261 661.082846 293.024384 645.637353 286.695191 632.94061 280.366001 620.243866 264.986234 615.103872 252.34352 621.460111 97.581613 699.268053 0 841.195691 0 998.290598Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bags" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M91.428572 536.392032C91.428572 415.268085 189.832018 316.952382 310.956994 316.952382L700.852529 316.952382C822.181783 316.952382 920.380951 415.05031 920.380951 536.392032L920.380951 951.020802C920.380951 964.433758 909.562061 975.238095 896.007136 975.238095L115.802387 975.238095C102.398724 975.238095 91.428572 964.275546 91.428572 951.020802L91.428572 536.392032 91.428572 536.392032ZM42.666667 536.392032 42.666667 951.020802C42.666667 991.213574 75.475834 1024 115.802387 1024L896.007136 1024C936.477835 1024 969.142857 991.378921 969.142857 951.020802L969.142857 536.392032C969.142857 388.108587 849.100988 268.190477 700.852529 268.190477L310.956994 268.190477C162.911294 268.190477 42.666667 388.327887 42.666667 536.392032L42.666667 536.392032Z"  ></path>' +
    '' +
    '<path d="M286.47619 463.382406C286.47619 449.741698 297.299765 438.857143 310.857143 438.857143 324.425094 438.857143 335.238095 449.659102 335.238095 463.382406L335.238095 536.23664C335.238095 549.877348 324.414522 560.761905 310.857143 560.761905 297.28919 560.761905 286.47619 549.959947 286.47619 536.23664L286.47619 463.382406 286.47619 463.382406ZM237.714286 463.382406 237.714286 536.23664C237.714286 576.901562 270.369879 609.52381 310.857143 609.52381 351.406496 609.52381 384 576.746669 384 536.23664L384 463.382406C384 422.717487 351.344405 390.095238 310.857143 390.095238 270.307791 390.095238 237.714286 422.87238 237.714286 463.382406L237.714286 463.382406Z"  ></path>' +
    '' +
    '<path d="M652.190477 463.382406C652.190477 449.741698 663.01405 438.857143 676.571428 438.857143 690.139381 438.857143 700.952382 449.659102 700.952382 463.382406L700.952382 536.23664C700.952382 549.877348 690.128806 560.761905 676.571428 560.761905 663.003475 560.761905 652.190477 549.959947 652.190477 536.23664L652.190477 463.382406 652.190477 463.382406ZM603.428572 463.382406 603.428572 536.23664C603.428572 576.901562 636.084166 609.52381 676.571428 609.52381 717.120781 609.52381 749.714285 576.746669 749.714285 536.23664L749.714285 463.382406C749.714285 422.717487 717.058692 390.095238 676.571428 390.095238 636.022076 390.095238 603.428572 422.87238 603.428572 463.382406L603.428572 463.382406Z"  ></path>' +
    '' +
    '<path d="M335.238095 414.47619 335.238095 219.428572C335.238095 125.251855 411.787422 48.761905 505.904762 48.761905 600.081478 48.761905 676.571428 125.31123 676.571428 219.428572L676.571428 414.47619 725.333333 414.47619 725.333333 219.428572C725.333333 98.38924 627.020407 0 505.904762 0 384.865431 0 286.47619 98.312925 286.47619 219.428572L286.47619 414.47619 335.238095 414.47619 335.238095 414.47619Z"  ></path>' +
    '' +
    '<path d="M79.238095 853.333333 762.013596 853.333333C775.478825 853.333333 786.394549 842.417609 786.394549 828.952382 786.394549 815.487153 775.478825 804.571428 762.013596 804.571428L79.238095 804.571428C65.772867 804.571428 54.857143 815.487153 54.857143 828.952382 54.857143 842.417609 65.772867 853.333333 79.238095 853.333333L79.238095 853.333333Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)