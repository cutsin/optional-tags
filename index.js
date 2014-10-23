/**
 * W3 optional tags: http://www.w3.org/html/wg/drafts/html/master/syntax.html#optional-tags
 * W3 space characters: http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#space-character
 */

module.exports = function(level) {
  /**
   * @param {String} level in ['safe', 'radical', 'unsafe', 'dangerous']
   */
  return new optionalTags()[level === true ? 'safe' : level || 'safe']
}

var optionalTags = function() {
  this.safe = {
    starts: [],
    ends: [
      'li',
      'dt',
      'dd',
      'tfoot',
      'tr',
      'th',
      'td',
      'rt',
      'rb',
      'rp',
      'optgroup',
      'option'
    ]
  }

  /**
   * Make sure you don't use any comments or space character
   */
  this.radical = {
    starts: [
      'html', // firstChild is not a comment
      'head'  // it's empty, or it's firstChild is a element
    ].concat(this.safe.starts),
    ends: [
      'html', // previousElementSibling is not a comment
      'head', // previousSibling is not a space character/comment
      'body', // previousElementSibling is not a comment
      'colgroup', // previousSibling is not a space character/comment
      'caption' // previousSibling is not a space character/comment
    ].concat(this.safe.ends)
  },

  /**
   * Make sure you really understand the rules
   *
   * Warning!!!:
   *
   * if you omitted the </head>, you'd better use a 'head only' tag before <body> like <base>:
   * <head> ...
   * ... <base><body> ...
   */
  this.unsafe = {
    starts: [
      'body'  // it's empty, or it's firstChild is not a space character/comment/<meta>/<link>/<script>/<style>/<template>
    ].concat(this.radical.starts),
    ends: [
    ].concat(this.radical.ends)
  },

  /*
   * Make sure you really understand details of each rules
   */
  this.dangerous = {
    starts: [
      'thead',
      'tbody',
      'colgroup'
    ].concat(this.unsafe.starts),
    ends: [
      'p',
      'thead',
      'tbody',
      'rtc'
    ].concat(this.unsafe.ends)
  }
}