class Flags {
  static get IS_PRIVATE_SANDBOX_ENABLED() {
    return process.env.IS_PRIVATE_SANDBOX_ENABLED === 'true'
  }
}

// PUBLIC API
class Config {
  static get Flags() { return Flags }
}

console.log('process.env')

export default Config
