const EOL = '\n'
  const srcPrefix = diffOpts.noPrefix ? '' : diffOpts.srcPrefix || 'a/'
  const dstPrefix = diffOpts.noPrefix ? '' : diffOpts.dstPrefix || 'b/'

      a: `${srcPrefix}${filename}`,
      b: `${dstPrefix}${filename}`,
      b: refs.get(`b/${filename}`),
      b: filenames.b && filenames.b.content,
      b: filenames.b && filenames.b.mode,
    if (contents.a === contents.b && modes.a === modes.b)
      continue
    if (modes.a === modes.b)
    else {
      if (modes.a && !modes.b)
      else if (!modes.a && modes.b)
      else {