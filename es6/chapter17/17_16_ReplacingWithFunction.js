const html =
    `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
    `<A href='/bar' Class="bar">Bar</a>\n` +
    `<a href="/baz">Baz</a>\n` +
    `<a onclick="javascript:alert('qux!')" href="/qux">Qux</a>`;

function sanitizeATag(aTag) {
    const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
    const attributes = parts[1].split(/\s+/);
    return '<a ' + attributes
        .filter(attr => /^(:?class|href|id)[\s=]/i.test(attr))
        .join(' ')
        + '>'
        + parts[2]
        + '</a>';
}

console.log(html.replace(/<a .*?<\/a>/ig, sanitizeATag));
