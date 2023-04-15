import noImage from './images/no-image.png'

type AssetNames = 'no-image'
const assets = (name: AssetNames) => {
  switch (name) {
    case 'no-image':
      return noImage
  }
}

export default assets
