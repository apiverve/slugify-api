using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.Slugify
{
    /// <summary>
    /// Query options for the Slugify API
    /// </summary>
    public class SlugifyQueryOptions
    {
        /// <summary>
        /// The text to convert to a slug
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// The separator character
        /// </summary>
        [JsonProperty("separator")]
        public string Separator { get; set; }

        /// <summary>
        /// Convert to lowercase (default: true)
        /// </summary>
        [JsonProperty("lowercase")]
        public string Lowercase { get; set; }
    }
}
