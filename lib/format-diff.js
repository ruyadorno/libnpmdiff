  const diffOpts = opts.diffOpts || {}
  if (diffOpts.nameOnly)
      a: `${diffOpts.srcPrefix || 'a/'}${filename}`,
      b: `${diffOpts.dstPrefix || 'b/'}${filename}`
      a: refs.get(`a/${filename}`),
      b: refs.get(`b/${filename}`)
    header(`index ${opts.tagVersionPrefix || 'v'}${versions.a}..${opts.tagVersionPrefix || 'v'}${versions.b} ${fileMode}`)
        {
          context: diffOpts.context || 3,
          ignoreWhitespace: diffOpts.ignoreWhitespace,
        }