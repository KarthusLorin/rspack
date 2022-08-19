use crate::RawOption;
use rspack_core::{CompilerOptionsBuilder, Mode};
use std::str::FromStr;

pub type RawMode = String;

impl RawOption<Mode> for RawMode {
  fn to_compiler_option(self, _options: &CompilerOptionsBuilder) -> anyhow::Result<Mode> {
    Mode::from_str(&self)
  }

  fn fallback_value(_options: &CompilerOptionsBuilder) -> Self {
    Default::default()
  }
}